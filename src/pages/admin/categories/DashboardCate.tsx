import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios from "../../../configs/axios";
import { Icate } from "../../../interFaces/categories";
import { Button, message, Popconfirm, Skeleton, Spin, Table } from "antd";
import { DeleteOutlined, EditFilled, FileAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const DashboardCate = () => {
  const queryClient = useQueryClient()
  const [messageApi, contextHolder] = message.useMessage();
  const navigator = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        return await Axios.get("/categories");
      } catch (error) {
        throw new Error(`Error fetching categories :${error}`);
      }
    },
  });

  const {mutate:handleDelete , isPending:isDeleting} = useMutation({
    mutationFn: async (id:number) => {
      try {
        await Axios.delete(`/categories/${id}`);
      } catch (error) {
        throw new Error(`Error deleting category :${error}`);
      }
    },onSuccess:()=>{
      messageApi.open({
        content: "Xóa thành công",
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["categories"]
      })
    },onError:()=>{
      messageApi.open({
        content: "Xóa không thành công",
        type: "error",
      });
    }
  })


  const dataTable = data?.data.data.map((item: Icate) => ({
    key: item.id,
    ...item,
  }));
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Active",

      key: "action",
      render: (cate: Icate) => (
        <>
          <Button onClick={() => {navigator(`/edit-cate/${cate.id}`)}}><EditFilled /></Button>
          <Popconfirm
            title="Bạn có chắc muốn xóa không?"
            onConfirm={()=>handleDelete(cate.id!)}
            disabled={isDeleting}
          >
            <Button disabled={isDeleting}>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </>
      )
    },
  ]

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
    {contextHolder}
    <Button type="primary" className="m-2" onClick={()=>{navigator(`add-cate`)}}>
        <FileAddOutlined /> Thêm Mới Cates
      </Button>
      <Table
        columns={columns}
        dataSource={dataTable}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
 
    </>

  )
};

export default DashboardCate;
