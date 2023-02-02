import { Request, Response } from 'express';
import { testappService } from '../service/testappService';
import { CustomLogger } from '../config/Logger'
let testapp = new testappService();

export class testappController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testapp.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testappController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testappController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testapp.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testappController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testappController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testapp.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testappController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testappController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testapp.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testappController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testappController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testapp.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testappController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testappController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testapp.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testappController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testappController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testapp.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testappController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testappController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testapp.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testappController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testappController.ts: GpGetNounCreatedBy');
    })}


}