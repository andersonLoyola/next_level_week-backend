import { Request, Response } from 'express';
import knex from "../database/connection";

class ItemsController {
	
	async index(req: Request, res: Response) {
		try {
			const items = await knex('items').select('*');		
			const serializedItems = items.map(item => {
				return {
					id: item.id,
					title: item.title,
					image: `localhost:4040/uploads/${item.image}`
				}
			})
			return res.json(serializedItems).status(200);
		} catch (e) {
			console.log(e);
		}	
		return res.json( {message: "Internal Server Error" } ).sendStatus(500);
	}

}

export default ItemsController;