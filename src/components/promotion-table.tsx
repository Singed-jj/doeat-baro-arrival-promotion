"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { promotionData, type PromotionRecord } from "@/data/promotion-data";

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("ko-KR").format(amount) + "원";
}

export function PromotionTable() {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px] text-center">순위</TableHead>
            <TableHead>라이더 이름</TableHead>
            <TableHead className="text-right">총 배달 건수</TableHead>
            <TableHead className="text-right">프로모션 금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {promotionData.map((record: PromotionRecord, index: number) => (
            <TableRow key={record.riderId}>
              <TableCell className="text-center font-medium">
                {index + 1}
              </TableCell>
              <TableCell className="font-medium">{record.riderName}</TableCell>
              <TableCell className="text-right">
                {record.deliveryCount.toLocaleString()}건
              </TableCell>
              <TableCell className="text-right font-semibold text-green-600">
                {formatCurrency(record.promotionPay)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
