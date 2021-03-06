const handlePrimaryMenu = async(req, res, pool, bcrypt) => {
    try {
        
        const { arr } = req.body;
        const { canteen_id } = req.user;
        await pool.query('DELETE FROM starters Where canteen_id = $1', [canteen_id]);
        await pool.query('DELETE FROM maincourse Where canteen_id = $1', [canteen_id]);
        await pool.query('DELETE FROM deserts Where canteen_id = $1', [canteen_id]);
        await pool.query('DELETE FROM drinks Where canteen_id = $1', [canteen_id]);
        // console.log(req.body);
        // console.log(req.user);
        // console.log(arr.starters[1]);
        for(let i = 0; i < arr.starters.length; i++) {   
            const { food_name, imageURL, price, status } = arr.starters[i];            
            await pool.query('INSERT INTO starters(food_name, price, imageURL, canteen_id, status) VALUES ($1,$2,$3,$4,$5)',
                [food_name, price, imageURL, canteen_id, status]
            )            
        }

        for(let i = 0; i < arr.maincourse.length; i++) {
            // console.log(arr.maincourse[i]);   
            const { food_name, imageURL, price, status } = arr.maincourse[i]    ;
            await pool.query('INSERT INTO maincourse(food_name, price, imageURL, canteen_id, status) VALUES ($1,$2,$3,$4,$5)',
            [food_name, price, imageURL, canteen_id, status]
            )             
        }

        for(let i = 0; i < arr.deserts.length; i++) {
            // console.log(arr.deserts[i]);   
            const { food_name, imageURL, price, status } = arr.deserts[i]    ;
            await pool.query('INSERT INTO deserts(food_name, price, imageURL, canteen_id,status) VALUES ($1,$2,$3,$4,$5)',
            [food_name, price, imageURL, canteen_id, status]
            )             
        }

        for(let i = 0; i < arr.drinks.length; i++) {
            // console.log(arr.drinks[i]);   
            const { food_name, imageURL, price, status }  = arr.drinks[i]    ;
            await pool.query('INSERT INTO drinks(food_name, price, imageURL, canteen_id,status) VALUES ($1,$2,$3,$4,$5)',
            [food_name, price, imageURL, canteen_id, status]
            )             
        }

    } catch (error) {
        console.log(error)        
    }
}

module.exports = {handlePrimaryMenu}