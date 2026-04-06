interface Experience {
  workSince: string | null | undefined;
  workTill?: string | null | undefined;
  currentlyWorking?: boolean;
  designation?: string;
}

const parseCustomDate = (dateStr: string | null | undefined): Date | null => {
  if (!dateStr) return null;

  const [rawMonth, yearStr] = dateStr.split("-");
  if (!rawMonth || !yearStr) return null;

  const monthStr = rawMonth
    .trim()
    .slice(0, 3)
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());

  const monthMap: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const month = monthMap[monthStr];
  const year = parseInt(yearStr.trim(), 10);

  if (isNaN(month) || isNaN(year)) return null;

  return new Date(year, month);
};

export const calculateTotalExperience = (
  experience: Experience[] = []
): string => {
  if (!Array.isArray(experience)) return "0 months";

  let totalMonths = 0;

  experience.forEach((exp) => {
    const from = parseCustomDate(exp.workSince);
    const to = exp.currentlyWorking
      ? new Date()
      : parseCustomDate(exp.workTill ?? null);

    if (!from || !to) return;

    const yearDiff = to.getFullYear() - from.getFullYear();
    const monthDiff = to.getMonth() - from.getMonth();

    totalMonths += yearDiff * 12 + monthDiff + 1; // +1 to include current month
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ") || "0 months";
};

export const calculateLatestDesignation = (
  experience: Experience[] = []
): string => {
  if (!Array.isArray(experience) || experience.length === 0) return "-";

  const currentlyWorking = experience.find(
    (exp) => exp.currentlyWorking && exp.designation
  );
  if (currentlyWorking) return currentlyWorking.designation ?? "-";

  const sorted = [...experience]
    .filter((exp) => exp.workSince && exp.designation)
    .sort((a, b) => {
      const aDate = parseMonthYear(a.workSince ?? "");
      const bDate = parseMonthYear(b.workSince ?? "");
      return bDate.getTime() - aDate.getTime();
    });

  return sorted[0]?.designation ?? "-";
};

export const parseMonthYear = (dateStr: string): Date => {
  if (!dateStr) return new Date(0);
  const parts = dateStr.split("-");
  const monthMap: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  const month = monthMap[parts[0]] ?? 0;
  const year = parseInt(parts[1], 10) || 1970;
  return new Date(year, month);
};
