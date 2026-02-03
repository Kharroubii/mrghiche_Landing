"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { shareholderReportsData } from '@/lib/data';

export default function ReportDetailRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reportId = searchParams.get('id');

  useEffect(() => {
    if (reportId) {
      const report = shareholderReportsData.find(r => r.id === reportId);
      if (report) {
        router.replace(`/news/${report.slug}`);
        return;
      }
    }
    router.replace('/');
  }, [reportId, router]);

  return (
    <div className="pt-64 text-center text-white">
      Redirecting to new report URL...
    </div>
  );
}