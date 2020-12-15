export interface DonationsBanner {
    enabled: boolean;
    content: {
      id: number;
      title?: string;
      dismissButtonText?: string;
      actionButtonText?: string;
      announcement: string;
      icon?: string;
    };
  }
