export class AtlassianConnect {
  public getLocation: (callback: (location: string) => void) => void;
  public getCurrentUser: (callback: (user: IConnectUser) => void) => void;
  public getTimeZone: (callback: (timezone: string) => void) => void;
  public request: (
    urlOrOptions: string | IRequestOptions,
    options?: IRequestOptions,
  ) => Promise<IResponse>;

  // Todo: Type: Test if this exists at all
  public jira: any;
  public dialog: any;
  public events: any;
  public context: any;
  public navigator: any;
  public history: any;
}
export interface IConnectUser {
  atlassianAccountId: string;
}
export interface IResponse {
  body: string;
  xhr: XMLHttpRequest;
}

export interface IRequestException {
  err: string;
  xhr: XMLHttpRequest;
}
export interface IRequestOptions {
  [x: string]: any;
  url?: string;
  type?: string;
  cache?: boolean;
  data?: any;
  contentType?: string;
  headers?: any;
  success?: (string) => void; // ezt kellett átírni
  error?: () => void;
  experimental?: boolean;
}
