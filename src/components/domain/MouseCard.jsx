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
    <Card className="overflow-hidden">
      {/* 上半：大图区域 */}
      {image && (
        <div className="relative w-full h-56 md:h-64 lg:h-72">
          <img
            src={image}
            alt={name || 'rat'}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* 可选：图上渐变，保证文字/角标可读 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* 可选：状态角标放在图上 */}
          {status && (
            <div className="absolute left-3 top-3">
              <Badge variant="subtle">{status}</Badge>
            </div>
          )}
        </div>
      )}

      {/* 下半：信息区域 */}
      <div className="p-4 md:p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base md:text-lg font-semibold leading-tight">
              {name || '—'}
            </h3>
            <div className="text-xs md:text-sm text-white/70 mt-1">
              {sex ? `Sex: ${sex}` : ''}{sex && dob ? ' · ' : ''}{dob ? `DOB: ${dob}` : ''}
            </div>
          </div>

          {/* 如果你不想状态在图上，就把这段放这 */}
          {/* {status && <Badge variant="subtle">{status}</Badge>} */}
        </div>

        <div className="flex flex-wrap gap-2">
          {color && <Badge>{color}</Badge>}
          {pattern && <Badge>{pattern}</Badge>}
          {bloodline && <Badge variant="subtle">{bloodline}</Badge>}
        </div>

        {temperament && (
          <p className="text-sm text-white/80 leading-relaxed">
            {temperament}
          </p>
        )}
      </div>
    </Card>
  );
};

export default MouseCard;
