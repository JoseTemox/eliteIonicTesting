import { promise } from 'protractor';

export class ModulesMock {

    public getModules(): Object[] {
      return [{}]
    }

    public getModuleById(id): Object {
      return {}
    }

    public getLessonById() {
      return {};
    }


}

export class AuthMock {

  public checkKey(key: string): any {}
  public reauthenticate(){
    return new Promise(() => {})
  }
  public logout(): any {}


}