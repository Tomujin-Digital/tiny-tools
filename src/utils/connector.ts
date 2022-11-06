import { HttpException } from "@nestjs/common";
import axios, { Method } from "axios";


export class Connector {
  constructor() { }
  static async sendRequest<T>(method: Method, url: string, data?: any, headers?: any): Promise<T | unknown> {
    try {
      const response = await axios({
        method,
        url,
        data,
        headers
      });
      return response.data;
    } catch (error) {
      if(error.response.status >= 500) throw new HttpException("Error connecting to microservice", 500);
      if(error.response.status >= 400) throw new HttpException(error.response.data, 400);
    }
  }
}