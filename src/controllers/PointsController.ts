import { Request, Response } from 'express';
import GeneralController from './GeneralController';
import knex from '../database/connection';

class PointsController implements GeneralController{

	async create(req: Request, res: Response) {
		const {
			city,
			email,
			whatsapp,
			latitude,
			longitude,
			name,
			uf,
			items
		} = req.body;
		try {
			const point = {
				city,
				email,
				whatsapp,
				image: 'fake-img',
				latitude,
				longitude,
				name,
				uf,
			};
			const transaction = await knex.transaction();
			const insertedIds = await transaction('points').insert(point, 'id');
			const pointId = insertedIds[0];
			const pointsItems = items.map((item_id: number) => {
				return {
					item_id,
					point_id: pointId
				};
			})
			await transaction('point_items').insert(pointsItems);
			return res.json(point);
		} catch(e) {
			console.log(e)
		}
		return res.json( { success: false }).status(500)
	}

	async index(req: Request, res: Response) {
		try {
			const points = await knex('points').select('*');
			res.send(points).status(200);
		} catch(e) {
			console.log(e);
		}
		return res.status(500).send({ message: 'Internal server error' });
	}

	async delete(req: Request, res: Response) {
		return res.json({ message: 'Internal server error' }).status(500);
	}

	async update(req: Request, res: Response) {
		const id = req.params.id;
		console.log(id);
		const {
			

		} = req.body;
		try {
			knex('points').update({

			}).where('')
		} catch (e){

		}
		return res.json({ message: 'Internal server error' }).status(500);
	}

}


export default PointsController;