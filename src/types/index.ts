export type TBlogs = {
  _id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  created_at: Date;
};

export type TProjects = {
  _id: string;
  title: string;
  subTitle: string;
  descriptions: string;
  img: string;
  technology: string[];
  liveSideLink: string;
  githubBackendLink: string;
  gitHubFrontendLink: string;
  category:string
}