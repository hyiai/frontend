import {
  SectionFourDataType,
  SectionOneType,
  SectionThreeDataType,
  SectionTwoDataType,
  TechnologyPageData,
} from "@/components/data/application-solution";
import {
  HeroDataType,
  staticHeroData,
  TargetIndustriesDataType,
  TargetIndustriesDetailsDataType,
} from "@/components/data/target-industries";
import { CreditInvoice } from "@/components/shared/invoice/creditInvoicePreview";
import { AGITrainingDataType } from "@/components/util/interface";
import { API_MESSAGES } from "@/lib/config/messages";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

console.log("BASE_URL:", BASE_URL);

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}

type individual = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  formPage: string;
};

export type registerUserForAgiCourseType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  agiCourseSlug: string;
};

type company = {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
  formPage: string;
};

type FormProps = individual | company;

interface supportFormProps {
  email: string;
  companyName: string;
  name: string;
  phoneNumber?: string;
  role?: string;
  companySize?: string;
  talentDuration?: string;
  talentSkills?: string[];
}
interface JobApplication {
  name: string;
  designation?: string;
  email: string;
  phoneNumber: string;
  cv: File;
  message: string;
}

export interface DynamicRoutes {
  mainTitle: string;
  slug: string;
}

interface AGITrainingDataApiResponseType {
  slug: string;
  level: string;
  name: string;
  enrollStart: string;
  liveClassStart: string;
  format: string[];
  duration: string;
  price: string;
  monthlyPrice: string;
}

async function handleResponse(response: Response) {
  let data;

  try {
    const text = await response.text(); // ✅ FIX
    data = text ? JSON.parse(text) : {};
  } catch (e) {
    console.error("Invalid JSON response:", e);
    data = {};
  }

  if (!response.ok) {
    const message =
      data?.message || getErrorMessageFromStatus(response.status);

    console.error("API Error:", message); // ✅ no crash
    return { data: [] }; // ✅ fallback (IMPORTANT)
  }

  return data;
}

// ================= ERROR MESSAGE =================
function getErrorMessageFromStatus(status: number): string {
  switch (status) {
    case 400:
      return API_MESSAGES.VALIDATION_ERROR.description;
    case 401:
      return API_MESSAGES.SESSION_EXPIRED.description;
    case 403:
      return API_MESSAGES.ACCESS_DENIED.description;
    case 404:
      return API_MESSAGES.NOT_FOUND.description;
    case 500:
      return API_MESSAGES.SERVER_ERROR.description;
    default:
      return API_MESSAGES.UNKNOWN_ERROR.description;
  }
}

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const defaultHeaders: Record<string, string> = {
    Accept: "application/json",
  };

  if (!(options.body instanceof FormData)) {
    defaultHeaders["Content-Type"] = "application/json";
  }

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    return await handleResponse(response);
  } catch (error) {
    console.error("Network Error:", error);

    return { data: [] }; // ✅ no crash
  }
}

export const companyTabAPI = {
  getPageData: async (role: string) => {
    try {
      const data = await apiRequest(`/get-role-page/${role}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
  getheaderData: async () => {
    try {
      const data = await apiRequest(`/get-all-role-pages`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  getSkill: async (skill: string) => {
    try {
      const response = await apiRequest(`/get-skills?q=${skill}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response || typeof response !== "object") {
        throw new Error("Invalid skill received");
      }

      return response;
    } catch (error) {
      throw error;
    }
  },

  getFeaturedBlogsData: async () => {
    try {
      const request = await fetch(`${BASE_URL}/fetured-blogs`, {
        headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
        cache: "no-store",
      });
      const response = await request.json();
      // const response = await apiRequest(`/fetured-blogs`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  getLatestBlogsData: async (page: number, limit: number = 10) => {
    try {
      const request = await fetch(
        `${BASE_URL}/latest-blogs?page=${page}&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
          cache: "no-store",
        }
      );

      if (!request.ok) {
        throw new Error(`Failed to fetch blogs: ${request.statusText}`);
      }

      const response = await request.json();
      return response;
    } catch (error) {
      throw error;
    }
  },

  getBlogData: async (blogId: string) => {
    try {
      const response = await apiRequest(`/blogs/${blogId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const FormAPI = {
  submitForm: async (data: FormProps) => {
    try {
      const response = await apiRequest(`/va-form-submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response || typeof response !== "object") {
        throw new Error("Invalid Form data received");
      }

      return response;
    } catch (error) {
      throw error;
    }
  },
  sendFormDataToSupport: async (data: supportFormProps) => {
    try {
      const response = await apiRequest(`/va-websiteData-submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.success)
        throw new Error(response.message || "Failed to send email");
      return response;
    } catch (error) {
      throw error;
    }
  },
  jobApply: async (data: JobApplication) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("designation", data?.designation || "");
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("message", data.message);

      if (data.cv) {
        formData.append("cv", data.cv);
      }
      const response = await apiRequest(`/candidate-cv`, {
        method: "POST",
        body: formData,
      });
      if (!response.success)
        throw new Error(response.message || "Failed to apply for job");
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export const PublicProfileAPI = {
  getFeaturedUsers: async () => {
    try {
      const response = await fetch(`${BASE_URL}/jobseekers/featured`)
      const res = await response.json();
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  getPublicTalent: async (userId: string) => {
    try {
      const response = await apiRequest(`/talent/public-profile/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  },
};

export const AboutUsAPI = {
  getAboutUsGraphCount: async () => {
    try {
      const response = await apiRequest("/get-graph-counts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  },
};

export const ForCompaniesPageAPI = {
  createLeadForm: async (data: {
    fullName?: string;
    gender?: string;
    email?: string;
    phoneNumber?: string;
    companyName?: string;
    country?: string;
    timeZone?: string;
    preferToCallTime?: string;
    preferredCountries?: string[];
    preferredTimeZone?: string[];
    salaryPerHourFrom?: number;
    salaryPerHourTo?: number;
    keySkills?: string[];
    numberOfTalentRequired?: number;
    workPreference?: string;
    profileStatus?: string;
  }) => {
    try {
      const response = await apiRequest("/va/lead-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  VerifiedTalentsBySkillOrDesignation: async (data: {
    skill?: string;
    designation?: string;
  }) => {
    try {
      const params = new URLSearchParams();
      if (data.skill) params.append("skill", data.skill);
      if (data.designation) params.append("designation", data.designation);
      const response = await apiRequest(
        `/web/get/verified/talent?${params.toString()}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response;
    } catch (error) {
      throw error;
    }
  },
  getDesignationsPage: async (designation: string) => {
    try {
      const response = await apiRequest(`/va/designation-page/${designation}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  getCompanyHeaderData: async () => {
    try {
      const data = await apiRequest(`/va/designation-page?isActive=true`);
      return data;
    } catch (error) {
      throw error;
    }
  },
   getPublicTalent: async (userId: string) => {
    try {
      const response = await apiRequest(
        `/get-talent-public-profile/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return {
        firstName: response.firstName || "",
        lastName: response.lastName || "",
        fullName: response.fullName || "",
        middleName: response.middleName || "",
        gender: response.gender || "",
        dateOfBirth: response.dateOfBirth || "",
        user: response.user || "",
        profilePicture: response.profilePicture || "",
        phoneNumber: response.phoneNumber || "",
        country: response.country || "",
        city: response.city || "",
        profileSummary: response.profileSummary || "",
        resume: response.resume || "",
        technicalSkills: response.technicalSkills || "",
        latestDesignation: response.latestDesignation || "",
        otherSkills: response.otherSkills || "",
        experience: response.experience || "",
        preference: response.preference || "",
        projects: response.projects || "",
        education: response.education || "",
        certification: response.certification || "",
        languages: response.languages || "",
        socialLinks: {
          github: response.github || "",
          linkedin: response.linkedin || "",
          portfolio: response.portfolio || "",
        },
      };
    } catch (error) {
      throw error;
    }
  },
  getAllSkills: async (query: string) => {
    try {
      const response = await apiRequest(`/skills?q=${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response) {
        throw new Error("Skills are not fetched");
      }
      return response;
    } catch (error) {
      throw error;
    }
  },
  getAllCountriesList: async (query: string) => {
    try {
      const response = await apiRequest(`/country-cities?country=${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  getAllTimeZones: async (query: string) => {
    try {
      const response = await apiRequest(`/timeZones?q=${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response) {
        throw new Error("Time Zones are not fetched");
      }
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export const ForTechnologiesPageAPI = {
  getRoutes: async (): Promise<DynamicRoutes[]> => {
    try {
      const data = await apiRequest("/get-all-consulting-solutions");

      return data.data ? data.data : [];
    } catch (error) {
      console.error(error);

      throw error;
    }
  },

  getPageData: async (slug: string): Promise<TechnologyPageData> => {
    try {
      const data = await apiRequest(`/get-consulting-solution-by-slug/${slug}`);

      if (!data.data) {
        throw new Error("No data found", data);
      }

      const responseData = data.data;

      const sectionOneData: SectionOneType = {
        title: responseData.mainTitle,
        description: responseData.mainDescription,
        coverImage:
          responseData.mainIcons.length > 0 ? responseData.mainIcons[0] : "",
        alt: "",
      };

      const sectionTwoData: SectionTwoDataType = {
        title: responseData.statsTitle,
        subTitle: responseData.statsDescription,
        smallerCards: responseData.stats.map(
          (item: { title: string; description: string }) => ({
            value: item.title,
            description: item.description,
          })
        ),
      };

      const sectionThreeData: SectionThreeDataType = {
        title: responseData.featureTitle,
        para: responseData.featureDescription.split("//"),
        image:
          responseData.featureIcons.length > 0
            ? responseData.featureIcons[0]
            : "",
        imgAlt: responseData.featureTitle,
      };
      const title = responseData.portfolioTitle.split("//");

      const sectionFourData: SectionFourDataType = {
        title1: title[0] ?? "",
        title2: title[1] ?? "",
        description: responseData.portfolioDescription,
        accordianData: responseData.expandableSections.map(
          (
            data: {
              sectionTitle: string;
              items: { title: string; description: string }[];
              result: string;
            },
            index: number
          ) => ({
            id: index,
            title: data.sectionTitle,
            items: data.items
              .filter(
                (item: { title: string; description: string }) =>
                  item.title !== "Result:"
              )
              .map((item: { title: string; description: string }) => ({
                label: item.title,
                description: item.description,
              })),
            result:
              data.items.find(
                (item: { title: string; description: string }) =>
                  item.title === "Result:"
              )?.description ?? "",
          })
        ),
      };

      return {
        sectionOneData,
        sectionTwoData,
        sectionThreeData,
        sectionFourData,
      };
    } catch (error) {
      throw error;
    }
  },
};

export const ForIndustriesPageAPI = {
  getRoutes: async (): Promise<DynamicRoutes[]> => {
    try {
      const data = await apiRequest("/get-all-industry-targets");
      const parsedData = (data.data ?? []).map(
        (item: { mainTitle: string; slug: string }) => {
          return {
            mainTitle: item.mainTitle
              .replace(/\/\//g, " ")
              .replace("  ", " ")
              .trim(),
            slug: item.slug,
          };
        }
      );

      return parsedData;
    } catch (error) {
      console.error(error);

      throw error;
    }
  },

  getPageData: async (slug: string): Promise<TargetIndustriesDataType> => {
    //Promise<TargetIndustriesDataType>
    try {
      const data = await apiRequest(`/get-industry-target-by-slug/${slug}`);

      if (!data.data) {
        throw new Error("No data found", data);
      }

      const responseData = data.data;
      const completeTitle = responseData.subMainTitle.split("//");

      const heroData: HeroDataType = {
        category: {
          tag: responseData.mainTitle ?? "",
        },
        heading: {
          main: completeTitle[0] ?? "",
          gradient: completeTitle[1] ?? "",
        },
        description: responseData.mainDescription,
        cta: {
          buttonText: staticHeroData.cta.buttonText,
          link: staticHeroData.cta.link,
        },
        stats: {
          number: staticHeroData.stats.number,
          label: staticHeroData.stats.label,
        },
        leftSection: {
          title: staticHeroData.leftSection.title,
          subtitle: staticHeroData.leftSection.subtitle,
        },
        rightSection: {
          textOne: staticHeroData.rightSection.textOne,
          textTwo: staticHeroData.rightSection.textTwo,
        },
        middleSection: {
          topCard: {
            title: responseData.stats[0].point1 ?? "",
          },
          bottomCard: {
            title: responseData.stats[0].point2 ?? "",
            stats: responseData.stats[0].point3 ?? "",
            statSubText: responseData.stats[0].point4 ?? "",
          },
        },
      };

      const zeroToAiData = responseData.mainFeature[0] ?? {
        title: "",
        point: "",
        description: [
          {
            point: "",
          },
          {
            point: "",
          },
        ],
      };

      const aiExpertiseData = responseData.featuredContent[0] ?? {
        title: "",
        description: "",
        topic: [
          {
            heading: "",
            point: "",
          },
        ],
      };

      const advancedUseCasesData = responseData.featuredContent[1] ?? {
        title: "",
        description: "",
        topic: [
          {
            heading: "",
            point: "",
          },
        ],
      };

      const targetIndustriesDetailsData: TargetIndustriesDetailsDataType = {
        zeroToAi: {
          title: zeroToAiData.title ?? "",
          startupDescription: zeroToAiData.description[0].point ?? "",
          enterpriseDescription: zeroToAiData.description[1].point ?? "",
          image: responseData.featuredImages[0] ?? "",
        },
        aiExpertise: {
          title: aiExpertiseData.title,
          subtitle: aiExpertiseData.description,
          items: aiExpertiseData.topic.map(
            (item: { heading: string; point: string }) => ({
              title: item.heading,
              description: item.point,
            })
          ),
          // image: responseData.featuredImages[1] ?? "",
        },
        advancedUseCases: {
          title: advancedUseCasesData.title,
          subtitle: advancedUseCasesData.description,
          items: advancedUseCasesData.topic.map(
            (item: { heading: string; point: string }) => ({
              title: item.heading,
              description: item.point,
            })
          ),
          // image: responseData.featuredImages[2] ?? "",
        },
      };

      return {
        heroData,
        targetIndustriesDetailsData,
      };
    } catch (error) {
      throw error;
    }
  },
};

export const CaseStudyAPI = {
  getAllCaseStudy: async () => {
    try {
      const response = await apiRequest("/case-studies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getCaseStudyBySlug: async (slug: string) => {
    try {
      const response = await fetch(`${BASE_URL}/case-studies/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      if (!response.ok) {
        if (response.status === 404) {
          throw new ApiError(
            res.message || "Failed to fetch case study",
            response.status
          );
        }
      }
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};

export const TalentResourcesAPI = {
  getAllTalentResourceBlogBySlug: async (slug: string) => {
    try {
      const response = await apiRequest(
        `/get-talent-resource-blog-by-slug/${slug}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// AGI Training API
export const AGITrainingAPI = {
  getCourseContent: async (): Promise<AGITrainingDataType> => {
    try {
      const response = await apiRequest(`/va/agi-courses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const content = response.data.map(
        (item: AGITrainingDataApiResponseType) => {
          return {
            slug: item.slug,
            level: item.level,
            title: item.name,
            duration: item.duration,
            description: [
              `Enroll Start Date: ${item.enrollStart}`,
              `Live Class Start Date: ${item.liveClassStart}`,
              `Format: ${item.format.reduce(
                (acc: string, curr: string) => `${acc}| ${curr}`,
                ""
              )}`,
              `Duration: ${item.duration}`,
            ],
            price: `${item.price} USD (or $${item.monthlyPrice}/month)`,
          };
        }
      );
      return {
        courseContent: content,
      };
    } catch (error) {
      console.error("Error fetching AGI training course content:", error);
      return {
        courseContent: [],
      };
    }
  },
  getagicoursebyslug: async (slug: string) => {
    try {
      const response = await apiRequest(`/va/agi-course-by-slug/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  registerUserForAgiCourse: async (
    courseData: registerUserForAgiCourseType
  ) => {
    try {
      const response = await apiRequest(`/va/agi/registeration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...courseData, quantity: 1 }),
      });

      return response;
    } catch (error) {
      throw error;
    }
  },

  getagicoursepurchasebyid: async (slug: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/va/agi-course-by-order/${slug}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await response.json();

      if (!response.ok) {
        return { status: 404, message: "AGI payment not made" };
      }

      return res.data;
    } catch (error) {
      throw error;
    }
  },

  getInvoiceDetailsForAgiCourse: async (
    purchaseId: string
  ): Promise<CreditInvoice> => {
    try {
      const response = await fetch(`${BASE_URL}/va/agi-invoice/${purchaseId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();

      const result = {
        buyer: {
          name: res.user.firstName + " " + res.user.lastName,
          email: res.user.email,
          phone: res.user.phone,
        },
        invoiceDate: res.order.createdAt,
        orderId: purchaseId,
        orderName: `enrollement fee for ${res.course}`,
        quantity: res.order.quantity,
        unitRate: res.order.amount / 100,
        amount: res.order.amount / 100,
        gst: 0,
        currency: res.order.currency,
        exchangeRate: res.order.exchangeRate,
        formatToUSD: false,
        showGST: false,
      };

      return result;
    } catch (error) {
      throw error;
    }
  },
};
