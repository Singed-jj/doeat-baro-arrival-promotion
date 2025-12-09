export interface PromotionRecord {
  riderId: number;
  riderName: string;
  deliveryCount: number;
  promotionPay: number;
  // 향후 추가 예정 필드
  totalDrivingTime?: number;
  totalEarnings?: number;
  averageHourlyWage?: number;
}

// 이름에서 전화번호 제거: "01023724060(송혜현)" → "송혜현"
function cleanRiderName(name: string): string {
  const match = name.match(/\(([^)]+)\)/);
  if (match) {
    return match[1];
  }
  // "-" 이후 부분 제거: "01091591044(마광태)-강감찬 팀장님" → "마광태"
  const dashMatch = name.match(/\(([^)]+)\)-/);
  if (dashMatch) {
    return dashMatch[1];
  }
  return name;
}

// CSV에서 current_promotion_pay > 0 인 레코드만 추출, 금액 높은 순 정렬
export const promotionData: PromotionRecord[] = [
  { riderId: 26608, riderName: "온진우", deliveryCount: 307, promotionPay: 500000 },
  { riderId: 30922, riderName: "김성범", deliveryCount: 306, promotionPay: 500000 },
  { riderId: 29098, riderName: "박진용", deliveryCount: 305, promotionPay: 500000 },
  { riderId: 3277, riderName: "오영배", deliveryCount: 260, promotionPay: 250000 },
  { riderId: 29497, riderName: "박진수", deliveryCount: 258, promotionPay: 250000 },
  { riderId: 30331, riderName: "김성훈", deliveryCount: 258, promotionPay: 250000 },
  { riderId: 30625, riderName: "안영중", deliveryCount: 250, promotionPay: 250000 },
  { riderId: 28588, riderName: "송혜현", deliveryCount: 204, promotionPay: 180000 },
  { riderId: 5686, riderName: "이한철", deliveryCount: 150, promotionPay: 50000 },
];

export const promotionPeriod = {
  startDate: "2025-11-26",
  endDate: "2025-12-02",
  displayText: "11/26 ~ 12/2 프로모션 달성 현황",
};
