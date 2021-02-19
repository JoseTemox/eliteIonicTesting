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

}