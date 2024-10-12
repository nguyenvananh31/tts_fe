import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Axios from '../../../configs/axios';
import { IProduct } from '../../../interFaces/products';
import { Button, Image, Popconfirm, Skeleton, Space, Spin, Table } from 'antd';
import { FileAddOutlined, ZoomInOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const DashboardProducts = () => {
  const queryClient = useQueryClient();
  const navigator = useNavigate()
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await Axios.get(`/products`);
      return response.data; 
    }
  });


  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: async (id: number) => {
      return await Axios.delete(`/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      console.log('Error deleting product');
    },
  });

  const dataTable = data?.map((product: IProduct) => ({
    key: product.id,
    ...product
  }));

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      width: 'auto',
      align: 'center',
      render: (_: any, item: any) => {

        console.log(item);
        
        
        return (
          <Image
            style={{
              objectFit: "cover",
              width: "120px",
              height: "80px",
              borderRadius: "5px",
            }}
            src={item.image}
            preview={{
              mask: (
                <Space direction="vertical" align="center">
                  <ZoomInOutlined />
                </Space>
              ),
            }}
          />
        );
      }
  
  },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Mô tả ngắn',
      dataIndex: 'sortdescription',
      key: 'sortdescription',
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (product: IProduct) => (
        <>
        
        <Popconfirm
          title="Bạn có chắc chắn muốn xóa không?"
          onConfirm={() => mutate(product.id!)}
          disabled={isLoading}
        >
          <Button danger>Xóa</Button>
        </Popconfirm>

        <Button>Edit</Button>
        </>
      ),
    }
  ];

  if (isError) {
    return (
      <div className="content">
        <p>Đã xảy ra lỗi: {error.message}</p>
      </div>
    );
  }

  if (isLoading || isDeleting) {
    return (
      <Spin tip="Đang tải dữ liệu...">
        <div className="content">
          <Skeleton active />
        </div>
      </Spin>
    );
  }

  return (
    <>
      <Button type="primary" className="m-2" onClick={()=>{navigator(`/add-product`)}}>
        <FileAddOutlined /> Thêm Mới Sản Phẩm
      </Button>
      <Table dataSource={dataTable} columns={columns} />
      
    </>
  );
};

export default DashboardProducts;
