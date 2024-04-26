import { Container } from "@/components";
import { Stack } from "expo-router";
import Storage from "expo-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Button, Title } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

const InfoScreen = () => {
  const [date, setDate] = useState(new Date());
  const [next, setNext] = useState<Date | null>(null);
  useEffect(() => {
    const getNext = async () => {
      const date = await Storage.getItem({ key: "doctorMeeting" });
      if (date) {
        console.log(JSON.parse(date));

        setNext(new Date(JSON.parse(date).date));
      }
    };
    getNext();
  }, []);
  return (
    <Container style={{ justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Уведомления:" }} />

      <View
        style={{
          gap: 15,
          backgroundColor: "white",
          padding: 30,
          width: "70%",
          borderRadius: 20,
        }}
      >
        <Text>
          Teкущее расписание: {next ? next.toLocaleString() : "Нет записей"}
        </Text>
        <Title style={{ color: "black" }}>
          Установить cледующий прием к врачу:
        </Title>
        <DatePickerN date={date} setDate={setDate} />
        <Button
          style={{ marginTop: 10 }}
          icon="plus"
          mode="contained"
          onPress={async () => {
            await Storage.setItem({
              key: "doctorMeeting",
              value: JSON.stringify({ date }),
            });
          }}
        >
          Добавить
        </Button>
      </View>
    </Container>
  );
};
export default InfoScreen;

const DatePickerN = ({
  date,
  setDate,
}: {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  //@ts-ignore
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView>
      <Button
        style={{ marginTop: 10 }}
        icon="calendar"
        mode="contained"
        onPress={showDatepicker}
      >
        Дата
      </Button>
      <Button
        style={{ marginTop: 10 }}
        icon="clock-time-eleven"
        mode="contained"
        onPress={showTimepicker}
      >
        Время
      </Button>
      <Text>Выбранно: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          //@ts-ignore
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
};
