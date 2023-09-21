import { Button, View } from "react-native";
import { G, Rect, Svg } from "react-native-svg";

export default function App() {
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Button
          title="A button"
          onPress={() => {
            console.log("Button pressed");
          }}
        />
        <View
          style={{
            borderWidth: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            aspectRatio: 1,
          }}
        >
          <Svg
            height="100%"
            width="100%"
            viewBox="0 0 100 100"
            onPress={() => console.log("svg pressed")}
          >
            <G
              rotation={-90}
              originX="50"
              originY="50"
              onPress={() => console.log("g pressed")}
            >
              <Rect
                onPress={() => console.log("rect pressed")}
                x="0"
                y="0"
                width="100"
                height="100"
                fill="rgb(0,0,255)"
                strokeWidth="3"
                stroke="rgb(0,0,0)"
              />
            </G>
          </Svg>
        </View>
      </View>
    </View>
  );
}
