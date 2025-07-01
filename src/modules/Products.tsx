import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { getproducts } from '../service/getProducts'

const Products = () => {
    const products = getproducts() 
    return (
        <div className='flex flex-wrap justify-between px-[20px] gap-1'>
            {products.map((item: any) => (
                <Card key={item.id}
                    className='!mt-[100px] shadow-sm '
                    style={{ width: 350 }}
                    cover={
                        <img
                            alt="example"
                            src={item.images[0]}
                        />
                    }
                    actions={[
                        <Button className='!w-full' size='large'>Order</Button>
                    ]}
                >
                    <Meta
                        avatar={<strong>#{item.id}</strong>}
                        title={item.title}
                        description={item.description}
                    />
                </Card>
            ))}
        </div>
    )
}

export default Products