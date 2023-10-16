import { Timestamp, doc, setDoc, collection, getDocs, query, where, orderBy, startAt, endAt, deleteDoc } from "firebase/firestore"
import React from "react"
import {} from "firebase/firestore"
import { db } from "@/firebase"
import { AuthContext } from "@/auth/AuthProvider"
import Header from "@/components/Header"
import { Balance } from "@/components/Balance"
import { IncomeExpense } from "@/components/IncomeExpense"
import AddItem from "@/components/AddItem"
import { ItemsList } from "@/components/ItemsList"

const Home = () => {
  const [inputText, setInputText] = React.useState<string>("")
  const [inputAmount, setInputAmount] = React.useState<number>(0)
  const [incomeItems, setIncomeItems] = React.useState<any[]>([])
  const [expenseItems, setExpenseItems] = React.useState<any[]>([])
  const [type, setType] = React.useState<string>("inc")
  const [date, setDate] = React.useState<Date>(new Date())
  const authContext = React.useContext(AuthContext)

  const selectedMonth = date.getMonth() + 1;
  const today = new Date();
  const thisMonth = today.getMonth() + 1;

  const totalCalc = (incomeItems: any[]) => {
    const incomeAmounts = incomeItems.map(incomeItem => incomeItem.amount)
    return incomeAmounts.reduce((acc, cur) => acc += cur, 0)
  }

  const incomeTotal = totalCalc(incomeItems);

  const deleteIncome = async (docId: string) => {
    await deleteDoc(doc(db, 'incomeItems', docId))
    getIncomeData();
    getExpenseData();
  }

  const deleteExpense = async (docId: string) => {
    await deleteDoc(doc(db, 'expenseItems', docId))
    getIncomeData();
    getExpenseData();
  }

  //月初の取得
  const startOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  //月末の取得
  const endOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  // 収入データの追加
  const addIncome = async (text: string, amount: number) => {
    const docId = Math.random().toString(32).substring(2)
    const date = Timestamp.now()

    if (!authContext?.currentUser) {
      alert("ユーザー情報がありません")
    }

    await setDoc(doc(db, 'incomeItems', docId), {
      uid: authContext?.currentUser ? authContext.currentUser.uid : '',
      text,
      amount,
      date,
    }).then(() => {
      setIncomeItems([
        ...incomeItems,
        {
          text: inputText,
          amount: inputAmount,
          docId: docId,
          date: date,
        }
      ])
    })
  }

  // 支出データの追加
  const addExpense = async (text: string, amount: number) => {
    const docId = Math.random().toString(32).substring(2)
    const date = Timestamp.now()

    if (!authContext?.currentUser) {
      alert("ユーザー情報がありません")
    }

    await setDoc(doc(db, 'expenseItems', docId), {
      uid: authContext?.currentUser ? authContext.currentUser.uid : '',
      text,
      amount,
      date,
    }).then(() => {
      setExpenseItems([
        ...expenseItems,
        {
          text: inputText,
          amount: inputAmount,
          docId: docId,
          date: date,
        }
      ])
    })
  }

  // 収入データの取得
  const getIncomeData = async () => {
    const income = collection(db, 'incomeItems')

    await getDocs(
      query(
        income,
        where('uid', '==', authContext?.currentUser?.uid),
        orderBy('date'),
        startAt(startOfMonth(date)),
        endAt(endOfMonth(date)),
      )
    ).then((snapshot) => {
      const incomeItems: any[] = []
      snapshot.forEach(doc => incomeItems.push({...doc.data(), docId: doc.id}))
      console.log(incomeItems)
      setIncomeItems(incomeItems)
    })
  }

  // 支出データの取得
  const getExpenseData = async () => {
    const expense = collection(db, 'expenseItems')

    await getDocs(
      query(
        expense,
        where('uid', '==', authContext?.currentUser?.uid),
        orderBy('date'),
        startAt(startOfMonth(date)),
        endAt(endOfMonth(date)),
      )
    ).then((snapshot) => {
      const expenseItems: any[] = []
      snapshot.forEach(doc => expenseItems.push({...doc.data(), docId: doc.id}))
      console.log(expenseItems)
      setExpenseItems(expenseItems)
    })
  }

  //for Header
  const setPrevMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    const day = date.getDate();
    setDate(new Date(year, month, day));
  }

  const setNextMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    setDate(new Date(year, month, day));
  }

  React.useEffect (() => {
    getIncomeData();
    getExpenseData();
  }, []);

  React.useEffect(() => {
    getIncomeData();
    getExpenseData();
  }, [date]);

  return (
    <div className="container">
      <div className="top">
        <Header
          date={date}
          setPrevMonth={setPrevMonth}
          setNextMonth={setNextMonth}
        />
        <Balance
          incomeTotal={incomeTotal}
          expenseItems={expenseItems}
        />
        <IncomeExpense
          incomeTotal={incomeTotal}
          expenseItems={expenseItems}
        />
      </div>
      <AddItem
        addIncome={addIncome}
        addExpense={addExpense}
        inputText={inputText}
        setInputText={setInputText}
        inputAmount={inputAmount}
        setInputAmount={setInputAmount}
        type={type}
        setType={setType}
        selectedMonth={selectedMonth}
        thisMonth={thisMonth}
      />
      <ItemsList
        deleteIncome={deleteIncome}
        deleteExpense={deleteExpense}
        incomeTotal={incomeTotal}
        incomeItems={incomeItems}
        expenseItems={expenseItems}
        selectedMonth={selectedMonth}
        thisMonth={thisMonth}
      />
    </div>
  )
}

export default Home