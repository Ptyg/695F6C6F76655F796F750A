class Typewriter {
  constructor(containerId, lines, options = {}) {
    this.container = document.getElementById(containerId);
    this.lines = lines;
    this.speed = options.speed || 75; // Typing speed (ms per character)
    this.cursorChar = options.cursorChar || '_'; // Cursor character
    this.currentLine = 0; // Current line being typed
    this.currentChar = 0; // Current character being typed
    this.isTyping = false; // Typing state
    this.onComplete = options.onComplete || (() => {}); // Callback when typing completes
    this.cursorVisible = true; // Cursor visibility state
    this.keepCursorOnComplete = options.keepCursorOnComplete || true; // Whether to keep cursor after completion
    this.blinkInterval = null; // Interval ID for cursor blinking
  }

  init() {
    this.isTyping = true;
    this._createCursor(); // Create and append the cursor
    this._typeLine(); // Start typing
  }

  _createCursor() {
    this.cursor = document.createElement('span');
    this.cursor.className = 'code-cursor';
    this.cursor.textContent = this.cursorChar;
    this.container.appendChild(this.cursor);
    this._startBlinking(); // Start blinking when idle
  }

  _startBlinking() {
    if (this.blinkInterval) clearInterval(this.blinkInterval);
    this.blinkInterval = setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
      this.cursor.style.visibility = this.cursorVisible ? 'visible' : 'hidden';
    }, 500);
  }

  _stopBlinking() {
    if (this.blinkInterval) clearInterval(this.blinkInterval); // Stop blinking
    this.cursor.style.visibility = 'visible'; // Ensure cursor is visible
  }

  _typeLine() {
    if (this.currentLine >= this.lines.length) {
      this.isTyping = false;
      if (!this.keepCursorOnComplete) {
        this.cursor.remove(); 
      } else {
        this._startBlinking();
      }
      this.onComplete();
      return;
    }

    const line = this.lines[this.currentLine];
    const lineSpan = document.createElement('span');
    if (line.color) lineSpan.style.color = line.color;

    this.container.insertBefore(lineSpan, this.cursor);

    this._stopBlinking();

    const typeInterval = setInterval(() => {
      if (this.currentChar < line.text.length) {
        lineSpan.textContent += line.text[this.currentChar];
        this.currentChar++;
      } else {
        clearInterval(typeInterval); // Stop typing for this line
        this.currentLine++;
        this.currentChar = 0;

        if (this.currentLine < this.lines.length) {
          // Append a line break
          this.container.appendChild(document.createElement('br'));
          // Move the cursor to the end of the container
          this.container.appendChild(this.cursor);

          // Wait for the specified delay before starting the next line
          const delay = this.lines[this.currentLine - 1].delay || 0;
          setTimeout(() => this._typeLine(), delay);
          this._startBlinking(); // Start blinking during the delay
        } else {
          this.isTyping = false;
          if (!this.keepCursorOnComplete) {
            this.cursor.remove(); // Remove cursor if keepCursorOnComplete is false
          } else {
            this._startBlinking(); // Start blinking after completion if cursor is kept
          }
          this.onComplete(); // Trigger completion callback
        }
      }
    }, this.speed);
  }
}