export class NavMock {

    public navigateForward(): any {
      return new Promise(function(resolve: Function): void {
        resolve();
      });
    }

    public navigateBackward(): any {
      return new Promise(function(resolve: Function): void {
        resolve();
      });
    }

    public navigateRoot(): any {
        return new Promise(function(resolve: Function): void {
          resolve();
        });
    }

}

export class LoadingComponentMock {
  present(): any {return Promise.resolve(true)}
  dismiss(): any {return Promise.resolve(true)}
}

export class LoadingControllerMock {
  public create(): Promise<LoadingComponentMock> {
    return Promise.resolve(new LoadingComponentMock());
  }
}