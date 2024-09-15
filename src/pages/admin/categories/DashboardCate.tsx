import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios from "../../../configs/axios";
import { Icate } from "../../../interFaces/categories";
import { Button, message, Popconfirm, Skeleton, Spin, Table } from "antd";
import { DeleteOutlined, EditFilled, FileAddOutlined } from "@ant-design/icons";
import ModalComponentCate from "./util/modalCate";
import { useState } from "react";

const DashboardCate = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCate, setSelectedCate] = useState<Icate | null>(null);
  const queryClient = useQueryClient()
  const [messageApi, contextHolder] = message.useMessage();

  const handleAddNew = () => {
    setSelectedCate(null);
    setIsModalVisible(true);
  };

  const handleEdit = (cate: Icate) => {
    setSelectedCate(cate);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };


  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        return await Axios("/categories");
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
          <Button onClick={() => handleEdit(cate)}><EditFilled /></Button>
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

  if (isError) {
    return (
      <div className="content">
        <p>Đã xảy ra l��i: {error.message}</p>
      </div>
    );
  }
  return (
    <>
    {contextHolder}
    <Button type="primary" className="m-2" onClick={handleAddNew}>
        <FileAddOutlined /> Thêm Mới Cates
      </Button>
      <Table
        columns={columns}
        dataSource={dataTable}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
       <ModalComponentCate
        visible={isModalVisible}
        onClose={handleCloseModal}
        cates={selectedCate}
      />
    </>

  )
};

export default DashboardCate;
