declare interface IAppDirectoryWebPartStrings {
  SearchButtonText: string;
  LoadingSpinnerLabel: string;
  NoAppFoundLabel: string;
  SearchBoxPlaceholder: string;
  ErrorLabel: string;
  SkillsLabel: string;
  ProjectsLabel: string;
  CopyEmailLabel: string;
  CopyPhoneLabel: string;
  CopyMobileLabel: string;
}

declare module 'AppDirectoryWebPartStrings' {
  const strings: IAppDirectoryWebPartStrings;
  export = strings;
}
