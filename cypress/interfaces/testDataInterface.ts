export interface HomePageSearch {
  query: string;
  segment: string;
  country: string;
}

export interface ESimPageDetails {
  name: string;
  coverage: string;
  data: string;
  duration: string;
  price: string;
}

export interface ESimOrder {
  description: string;
  package_id: string;
  quantity: number;
}

export interface TestData {
  homePageSearch: HomePageSearch;
  eSimPageDetails: ESimPageDetails;
  eSimOrder: ESimOrder;
}
