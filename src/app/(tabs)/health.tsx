import { Container, Subtitle } from "@/components";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import Storage from "expo-storage";

import {
  Button,
  FAB,
  Modal,
  Portal,
  TextInput,
  Title,
} from "react-native-paper";

const symptoms: { eng: Symptoms; ru: string }[] = [
  { eng: "painIntensity", ru: "Боль" },
  { eng: "vomiting", ru: "Рвота" },
  { eng: "nausea", ru: "Тошнота" },
  { eng: "abdominalBloating", ru: "Вздутие живота" },
  { eng: "stool", ru: "Стул после еды" },
  { eng: "bloodPressure", ru: "Давление и пульс" },
];
type Symptoms =
  | "painIntensity"
  | "vomiting"
  | "nausea"
  | "abdominalBloating"
  | "stool"
  | "bloodPressure";
const painNumbers = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];
const Pressure = ({
  changeStats,
}: {
  changeStats: (key: string, value: any) => void;
}) => {
  const [sis, setSis] = useState("120");
  const [dis, setDis] = useState("80");
  const [pulse, setPulse] = useState("80");

  return (
    <View style={{ gap: 40 }}>
      <Subtitle>Давление и пульс:</Subtitle>
      <TextInput
        label="Систолическое давление"
        value={sis}
        onChangeText={setSis}
      />
      <TextInput
        label="Диaстолическое давление"
        value={dis}
        onChangeText={setDis}
      />
      <TextInput label="Пульс" value={pulse} onChangeText={setPulse} />

      <Button
        icon="plus"
        mode="contained"
        onPress={() =>
          changeStats("bloodPressure", {
            systolic: +sis,
            diastolic: +dis,
            pulse: +pulse,
          })
        }
      >
        Отметить
      </Button>
    </View>
  );
};
const Nausea = ({
  changeStats,
}: {
  changeStats: (key: string, value: any) => void;
}) => {
  const [value, setValue] = useState("no");

  return (
    <View style={{ gap: 40 }}>
      <Subtitle>Ecть ли тошнота после еды?</Subtitle>
      {["yes", "no"].map((v) => (
        <Button
          key={v}
          style={{
            backgroundColor: v == value ? "black" : "gray",
          }}
          onPress={() => setValue(v)}
        >
          {v == "yes" ? "Да" : "Нет"}
        </Button>
      ))}
      <Button
        icon="plus"
        mode="contained"
        onPress={() => changeStats("nausea", value == "yes")}
      >
        Отметить
      </Button>
    </View>
  );
};
const AbdominalBloating = ({
  changeStats,
}: {
  changeStats: (key: string, value: any) => void;
}) => {
  const [value, setValue] = useState("no");

  return (
    <View style={{ gap: 40 }}>
      <Subtitle>Ecть ли вздутие?</Subtitle>
      {["yes", "no"].map((v) => (
        <Button
          key={v}
          style={{
            backgroundColor: v == value ? "black" : "gray",
          }}
          onPress={() => setValue(v)}
        >
          {v == "yes" ? "Да" : "Нет"}
        </Button>
      ))}
      <Button
        icon="plus"
        mode="contained"
        onPress={() => changeStats("abdominalBloating", value == "yes")}
      >
        Отметить
      </Button>
    </View>
  );
};
const Stool = ({
  changeStats,
}: {
  changeStats: (key: string, value: any) => void;
}) => {
  const [value, setValue] = useState("no");

  return (
    <View style={{ gap: 40 }}>
      <Subtitle>Регулярный стул после еды?</Subtitle>
      {["yes", "no"].map((v) => (
        <Button
          key={v}
          style={{
            backgroundColor: v == value ? "black" : "gray",
          }}
          onPress={() => setValue(v)}
        >
          {v == "yes" ? "Регуляный" : "Не регуляный"}
        </Button>
      ))}
      <Button
        icon="plus"
        mode="contained"
        onPress={() =>
          changeStats("stool", value == "yes" ? "Регуляный" : "Не регуляный")
        }
      >
        Отметить
      </Button>
    </View>
  );
};

const Vomit = ({
  changeStats,
}: {
  changeStats: (key: string, value: any) => void;
}) => {
  const [value, setValue] = useState("no");

  return (
    <View style={{ gap: 40 }}>
      <Subtitle>Ecть ли рвота после еды?</Subtitle>
      {["yes", "no"].map((v) => (
        <Button
          key={v}
          style={{
            backgroundColor: v == value ? "black" : "gray",
          }}
          onPress={() => setValue(v)}
        >
          {v == "yes" ? "Да" : "Нет"}
        </Button>
      ))}
      <Button
        icon="plus"
        mode="contained"
        onPress={() => changeStats("vomiting", value == "yes")}
      >
        Отметить
      </Button>
    </View>
  );
};
const Pain = ({
  changeStats,
}: {
  changeStats: (key: string, value: any) => void;
}) => {
  const [value, setValue] = useState("1");

  return (
    <View style={{ gap: 40 }}>
      <Subtitle>Интенсивность болевого приступа по шкале от 1 до 10</Subtitle>
      <FlatList
        horizontal
        data={painNumbers}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <Button
            onPress={() => setValue(item.value)}
            style={{
              backgroundColor: value === item.label ? "black" : "gray",
            }}
          >
            {item.label}
          </Button>
        )}
        keyExtractor={(item) => item.value}
      />
      <Button
        icon="plus"
        mode="contained"
        onPress={() => changeStats("painIntensity", value)}
      >
        Отметить
      </Button>
    </View>
  );
};
const getContent = (
  value: string,
  changeStats: (key: string, value: any) => void,
) => {
  switch (value) {
    case "painIntensity":
      return <Pain changeStats={changeStats} />;
    case "vomiting":
      return <Vomit changeStats={changeStats} />;
    case "nausea":
      return <Nausea changeStats={changeStats} />;
    case "abdominalBloating":
      return <AbdominalBloating changeStats={changeStats} />;
    case "stool":
      return <Stool changeStats={changeStats} />;
    case "bloodPressure":
      return <Pressure changeStats={changeStats} />;
  }
};
export default function HealthScreen() {
  const [selected, setSelected] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [stats, setStats] = useState({
    date: getCurrentDate(),
    painIntensity: 6,
    vomiting: false,
    nausea: true,
    abdominalBloating: false,
    stool: "регулярно",
    bloodPressure: { systolic: 130, diastolic: 85, pulse: 75 },
  });

  const changeStats = (key: string, value: any) => {
    setStats({ ...stats, [key]: value });
    setShowModal(false);
  };
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
  };
  return (
    <Container style={{ justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Здоровье:" }} />
      <View
        style={{
          gap: 15,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Title style={{ color: "black" }}>{getCurrentDate()}</Title>
        {symptoms.map((s, idx) => (
          <View key={s.eng}>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {idx + 1}.{s.ru}
              </Text>
              <FAB
                icon="plus"
                size="small"
                style={{ backgroundColor: "black" }}
                onPress={() => {
                  setSelected(s.eng);
                  setShowModal(true);
                }}
              />
            </View>
          </View>
        ))}
      </View>
      <Portal>
        <Modal
          style={{ height: "60%" }}
          contentContainerStyle={containerStyle}
          visible={showModal}
          onDismiss={() => setShowModal(false)}
        >
          <Title style={{ color: "black" }}>{getCurrentDate()}</Title>
          {getContent(selected, changeStats)}
        </Modal>
      </Portal>
      <Button icon="plus" mode="contained" onPress={() => setShowRes(true)}>
        Добавить отчет
      </Button>
      <Link
        href={"/health/stats"}
        style={{ marginTop: 30, fontSize: 22, fontWeight: "bold" }}
      >
        Статистика
      </Link>
      <Portal>
        <Modal
          style={{ height: "60%" }}
          contentContainerStyle={containerStyle}
          visible={showRes}
          onDismiss={() => setShowRes(false)}
        >
          <Title style={{ color: "black" }}>{getCurrentDate()}</Title>
          <Text>
            {symptoms[0].ru}: {stats.painIntensity}
          </Text>
          <Text>
            {symptoms[1].ru}:{stats.vomiting ? "ecть" : "нет"}
          </Text>
          <Text>
            {symptoms[2].ru}:{stats.nausea ? "ecть" : "нет"}
          </Text>
          <Text>
            {symptoms[3].ru}:{stats.abdominalBloating ? "ecть" : "нет"}
          </Text>
          <Text>
            {symptoms[4].ru}:{stats.stool}
          </Text>
          <Text>
            {symptoms[5].ru}:{stats.bloodPressure.systolic} -{" "}
            {stats.bloodPressure.diastolic} , {stats.bloodPressure.pulse}
          </Text>
          <Button
            style={{ marginTop: 10 }}
            icon="plus"
            mode="contained"
            onPress={async () => {
              await saveStats({ ...stats, date: getCurrentDate() });

              setShowRes(false);
            }}
          >
            Добавить
          </Button>
        </Modal>
      </Portal>
    </Container>
  );
}

const saveStats = async (stats: any) => {
  let health = JSON.parse((await Storage.getItem({ key: "health" })) || "[]");
  let found = false;

  // Check if there are existing stats for the same date
  health = health.map((h: any) => {
    if (h.date === stats.date) {
      found = true;
      return stats; // Replace existing stats with new stats for the same date
    }
    return h;
  });

  // If no existing stats found for the same date, add the new stats
  if (!found) {
    health.push(stats);
  }

  // Save the updated health data to storage
  await Storage.setItem({ key: "health", value: JSON.stringify(health) });
};
function getCurrentDate() {
  const currentDate = new Date();

  const dd = String(currentDate.getDate()).padStart(2, "0");
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = currentDate.getFullYear();

  return `${dd}--${mm}--${yyyy}`;
}
