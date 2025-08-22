import { Injectable, inject, signal } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { auth } from './auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authgoogle {

  private oauthService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any>(null);

  constructor(){
    this.initConfiguration();
  }

    initConfiguration(){
      this.oauthService.configure(auth);
      this.oauthService.setupAutomaticSilentRefresh();
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then( () => {
        if(this.oauthService.hasValidAccessToken()){
          this.profile.set(this.oauthService.getIdentityClaims());
        }
      } );
    }

    login(){
      this.oauthService.initImplicitFlow();
    }

    logout(){
      this.oauthService.revokeTokenAndLogout();
      this.oauthService.logOut();
      this.profile.set(null);
      // Remova chaves específicas do OAuth2
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('id_token');
      sessionStorage.removeItem('expires_at');
      sessionStorage.removeItem('nonce');
      sessionStorage.removeItem('oauth2_auth_code');
      sessionStorage.removeItem('oauth2_pkce_code_verifier');
      sessionStorage.clear();
      this.router.navigate([''])
    }
    getLoggedProfile(){
      return this.profile();
    }
}