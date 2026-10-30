import React from 'react';
import Link from 'next/link';
import { Badge, BadgeVariant } from './Badge';
import { Icon } from './Icon';

interface ReportCardProps {
  id: string;
  title: string;
  category: string;
  status: string;
  statusVariant: BadgeVariant;
  location: string;
  date: string;
  isVerified?: boolean;
  svgIllustration?: React.ReactNode;
}

export const ReportCard: React.FC<ReportCardProps> = ({
  id,
  title,
  category,
  status,
  statusVariant,
  location,
  date,
  isVerified,
  svgIllustration,
}) => {
  return (
    <article className="card rcard">
      <div className="thumb">
        {svgIllustration || <small>Ilustrasi simulasi</small>}
      </div>
      <div className="rcard-body">
        <div className="rcard-meta">
          <Badge>{category}</Badge>
          <Badge variant={statusVariant}>{status}</Badge>
        </div>
        <h3>{title}</h3>
        <p className="small">
          <Icon name="pin" /> {location}
        </p>
        {isVerified !== undefined && (
          <p className="small">
            <Icon name={isVerified ? 'shield' : 'search'} />
            {isVerified ? 'Terverifikasi' : 'Belum diverifikasi'}
          </p>
        )}
        <div className="rcard-foot">
          <span className="small">
            <Icon name="cal" /> {date}
          </span>
          <Link href={`/laporan/${id}`}>Lihat detail</Link>
        </div>
      </div>
    </article>
  );
};