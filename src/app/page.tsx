import { Button } from "@/components/ui/button";
import { PromotionTable } from "@/components/promotion-table";
import { promotionPeriod } from "@/data/promotion-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 헤더 섹션 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {promotionPeriod.displayText}
          </h1>
          <p className="text-gray-600">
            바로도착 프로모션 달성 라이더 현황입니다
          </p>
        </div>

        {/* 테이블 섹션 */}
        <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6 mb-8">
          <PromotionTable />
        </div>

        {/* CTA 버튼 섹션 */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full"
          >
            <a
              href="https://abr.ge/swepht"
              target="_blank"
              rel="noopener noreferrer"
            >
              일정 신청하러 가기
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
