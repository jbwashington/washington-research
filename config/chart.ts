import { ChartConfig } from "@/components/ui/chart";

export const budgetaryResourcesChartConfig = {
  fiscal_year: {
    label: "Fiscal Year",
  },
  total_budgetary_resources: {
    label: "Total Budgetary Resources",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

