import React from 'react';
import { Link } from 'react-router';
import Card from '~/ui/card';
import cn from '~/utils/style-merge';

const ItemCard: React.FC<{
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  to: string
  className?: string;
}> = (props) => {
  return (
    <Link to={props.to}>
      <Card className={cn('relative overflow-hidden', props.className)}>
        {props.icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none text-6xl">
            {props.icon}
          </div>
        )}
        <div className="space-y-2">
          <h1 className="text-2xl text-pink-400">{props.title}</h1>
          <p className="text-gray-500 text-xs">{props.subtitle}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ItemCard;
