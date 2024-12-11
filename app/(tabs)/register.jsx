import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";

export default function Register({ navigation }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setError("");
    setIsLoading(true);

    const { username, email, password } = formData;

    // Input validation
    if (!username || !email || !password) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    // Simulate a delay and mock registration logic
    setTimeout(() => {
      setIsLoading(false);
      // Assume registration was successful, navigate to Login screen
      navigation.navigate("Login");
    }, 1500);
  };

  return (
    <View style={styles.registerPage}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>
          Welcome to <Image source={require("../../public/logo.png")} style={styles.logo} />
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formData.username}
          onChangeText={(value) => handleChange("username", value)}
          placeholderTextColor="#9ca3af"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(value) => handleChange("email", value)}
          keyboardType="email-address"
          placeholderTextColor="#9ca3af"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formData.password}
          onChangeText={(value) => handleChange("password", value)}
          secureTextEntry
          placeholderTextColor="#9ca3af"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.buttonText}>Register</Text>
          )}
        </TouchableOpacity>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Do you have an account?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imgContainer}>
        <Image source={require("../../public/bg.png")} style={styles.backgroundImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registerPage: {
    flex: 1,
    backgroundColor: "#f9fafb",
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 25,
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
    marginLeft: 5,
  },
  input: {
    width: "85%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#ffffff",
    fontSize: 16,
    color: "#111827",
  },
  button: {
    width: "85%",
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#3bc449",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  error: {
    color: "#ef4444",
    marginTop: 10,
    fontSize: 14,
  },
  link: {
    color: "#2563eb",
    marginTop: 15,
    fontSize: 14,
  },
  imgContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  backgroundImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
});
