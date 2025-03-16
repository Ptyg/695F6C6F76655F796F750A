import { Stats } from '../stats/stats.js';

export class KeyDates {
  constructor() {
    this.dates = {
      loveConfession: new Date('2024-11-26T00:54'),
      firstKiss: new Date('2024-12-28T09:29'),
      officialDating: new Date('2025-01-23T00:46'),
      married: new Date('2025-03-16T13:38'),
    };
    this.container = null;
  }

  setContainer(container) {
    this.container = container;
    return this;
  }

  show() {
    if (!this.container) {
      throw new Error('Container not set. Call setContainer() first.');
    }

    this.container.innerHTML = '';
    for (const [key, date] of Object.entries(this.dates)) {
      const timerElement = document.createElement('div');
      timerElement.className = 'date-counter bg-gray-800 p-4 rounded-lg border border-gray-700';
      timerElement.innerHTML = `
        <h3 class="text-pink-400 font-semibold capitalize">${key.replace(/([A-Z])/g, ' $1').trim()}</h3>
        <p class="text-gray-400 text-sm">${date.toLocaleString()}</p>
        <div class="text-purple-300 font-mono mt-2" data-date="${date.toISOString()}"></div>
      `;
      this.container.appendChild(timerElement);
    }
    return this;
  }

  updateTimers() {
    if (!this.container) {
      throw new Error('Container not set. Call setContainer() first.');
    }

    const formattedDifferences = this.getFormattedTimeDifferences();

    this.container.querySelectorAll('.date-counter [data-date]').forEach(element => {
      const key = element.parentElement.querySelector('h3').textContent.replace(/ /g, '');
      element.textContent = formattedDifferences[key];
    });

    return this;
  }

  getFormattedTimeDifferences() {
    const formattedDifferences = {};
    for (const [key, date] of Object.entries(this.dates)) {
      const diff = Stats.calculateTimeDifference(date);
      formattedDifferences[key] = Stats.formatTimeDifference(diff);
    }
    return formattedDifferences;
  }
}
