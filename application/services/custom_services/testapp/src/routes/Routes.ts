import { Request, Response, NextFunction } from "express";
import { testappController } from '../controller/testappController';


export class Routes {
    private testapp: testappController = new testappController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/testapp/:id').delete(this.testapp.GpDelete);
app.route('/testapp/get/search').get(this.testapp.GpSearch);
app.route('/testapp/get/update').put(this.testapp.GpSearchForUpdate);
app.route('/testapp').put(this.testapp.GpUpdate);
app.route('/testapp/:id').get(this.testapp.GpGetNounById);
app.route('/testapp').get(this.testapp.GpGetAllValues);
app.route('/testapp').post(this.testapp.GpCreate);
app.route('/testapp/userid/created_by').get(this.testapp.GpGetNounCreatedBy);
     }

}