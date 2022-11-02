import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Card";
import Form from "./Form";
import AmountInfo from "./AmountInfo";
import { readBalance } from "../../../store/user/balance/readBalance";
import ContentLoader from "../../../components/ContentLoader";

type Props = {
  setSelectedIndex: (index: number) => void;
};

const TransactionCart: React.FC<any> = ({ setSelectedIndex }) => {
  const dispatch = useDispatch();
  const { read_balance } = useSelector(
    ({ user }) => ({ read_balance: user.balance.read_balance }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(readBalance());
  }, []);

  return (
    <Card className="max-w-xl mx-auto">
      <ContentLoader payload={[read_balance]}>
        <Card.Header>
          <Card.Title>Send Money</Card.Title>
          <Card.Text>A better way to send money</Card.Text>
        </Card.Header>
        <Card.Body>
          <AmountInfo amount={read_balance?.payload?.amount} />
          <Form setSelectedIndex={setSelectedIndex} />
        </Card.Body>
      </ContentLoader>
    </Card>
  );
};

export default TransactionCart;
