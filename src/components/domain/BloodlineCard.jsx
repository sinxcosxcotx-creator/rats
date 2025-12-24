// src/components/domain/BloodlineCard.jsx
// 血线卡片：展示一条血线的名字、代号、代次、重点性状与备注。

import React from 'react';
import Card from '@components/ui/Card';
import Badge from '@components/ui/Badge';

const BloodlineCard = ({ bloodline }) => {
  if (!bloodline) return null;

  const {
    name,
    code,
    focusTraits,
    generation,
    notes,
    origin
  } = bloodline;

  return (
    <Card className="flex flex-col gap-3 p-4 md:p-5">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base md:text-lg font-semibold text-white">
          {name}
        </h3>
        {code && (
          <Badge variant="outline">
            {code}
          </Badge>
        )}
      </div>

      <div className="text-xs md:text-[13px] text-white/75 space-y-1">
        {generation && (
          <div>
            Generation:{' '}
            <span className="text-white/90">
              {generation}
            </span>
          </div>
        )}
        {origin && (
          <div>
            Origin:{' '}
            <span className="text-white/90">
              {origin}
            </span>
          </div>
        )}
        {Array.isArray(focusTraits) && focusTraits.length > 0 && (
          <div>
            Focus traits:{' '}
            <span className="text-white/90">
              {focusTraits.join(', ')}
            </span>
          </div>
        )}
      </div>

      {notes && (
        <p className="text-xs md:text-[13px] text-white/70 leading-relaxed">
          {notes}
        </p>
      )}
    </Card>
  );
};

export default BloodlineCard;
