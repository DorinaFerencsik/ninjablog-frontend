import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomHttpClient } from 'src/app/shared/services/custom-http-client.service';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthService {

  constructor(private httpClient: CustomHttpClient) {}

  /**
   * Get user details
   * @param userId id of user
   */
  public getUser(userId: number): Observable<IUser> {
    return this.httpClient.get(`users/${userId}`);
  }
}
