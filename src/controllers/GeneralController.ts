import { Request, Response } from 'express';

interface GeneralController {
    create (req: Request, res: Response): Promise<Response>;
    update (req: Request, res: Response): Promise<Response>;
    delete (req: Request, res: Response): Promise<Response>;
    index (req: Request, res: Response): Promise<Response>;
}

export default GeneralController;