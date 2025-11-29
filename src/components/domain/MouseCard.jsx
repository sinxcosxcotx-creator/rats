// src/components/domain/MouseCard.jsx
// 单只鼠卡片：
// - 使用通用 Card 外壳
// - 图片 + 关键属性（名字、性别、出生日期、颜色、性格等）
// - 保持信息紧凑但不拥挤

import React from 'react';
import Card from '@components/ui/Card';
import Badge from '@components/ui/Badge';

const MouseCard = ({ mouse }) => {
  if (!mouse) return null;

  const {
    name,
    sex,
    dob,
    color,
    pattern,
    bloodline,
    temperament,
    status,
    image
  } = mouse;

  return (
    <Card className="flex flex-col md:flex-row gap-4 p-4 md:p-5">
      {/* 图片区域（可选） */}
      {image && (
        <div className="w-full md:w-40 flex-shrink-0">
          <div className="rounded-2xl overflow-hidden border border-ratopia-border bg-black/40 h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* 信息区域 */}
      <div className="flex-1 flex flex-col gap-2 text-sm text-white/80">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base md:text-lg font-semibold text-white">
            {name}
          </h3>
          {status && <Badge variant="accent">{status}</Badge>}
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs md:text-[13px]">
          {sex && (
            <span>
              Sex: <span className="text-white/90">{sex}</span>
            </span>
          )}
          {dob && (
            <span>
              DOB: <span className="text-white/90">{dob}</span>
            </span>
          )}
        </div>

        {(color || pattern || bloodline) && (
          <div className="space-y-1 text-xs md:text-[13px]">
            {color && (
              <div>
                Color: <span className="text-white/90">{color}</span>
              </div>
            )}
            {pattern && (
              <div>
                Pattern: <span className="text-white/90">{pattern}</span>
              </div>
            )}
            {bloodline && (
              <div>
                Bloodline: <span className="text-white/90">{bloodline}</span>
              </div>
            )}
          </div>
        )}

        {temperament && (
          <div className="mt-1 text-xs md:text-[13px] text-white/75">
            Temperament: {temperament}
          </div>
        )}
      </div>
    </Card>
  );
};

export default MouseCard;
