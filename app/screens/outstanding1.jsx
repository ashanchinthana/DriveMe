import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function OutstandingFines() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header with Logo */}
            <View style={styles.halfCircle}>
                <Text style={styles.logoText}>
                    <Text style={{ color: "#0A66C2", fontSize: 40 }}>D</Text>uthaya
                </Text>
            </View>

            {/* Outstanding Fines Section */}
            <Text style={styles.title}>Outstanding Fines</Text>

            {/* Fine Details Table */}
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Offence ID</Text>
                    <Text style={styles.tableHeader}>Amount (RS)</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableData}>01</Text>
                    <Text style={styles.tableData}>1000.00</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableData}>05</Text>
                    <Text style={styles.tableData}>1000.00</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableData}>128 A</Text>
                    <Text style={styles.tableData}>1000.00</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.totalText}>TOTAL</Text>
                    <Text style={styles.totalAmount}>3000.00</Text>
                </View>
            </View>

            {/* Pay Button */}
            <TouchableOpacity style={styles.payButton} onPress={() => router.push('/screens/outstanding2')}>
                <Text style={styles.payButtonText}>Pay</Text>
            </TouchableOpacity>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/Profile')}>
                    <FontAwesome5 name="user" size={24} color="black" />
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/Notifications')}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Text style={styles.navText}>Notifications</Text>
                </TouchableOpacity>

                {/* Home Button */}
                <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/screens/home')}>
                    <Ionicons name="home" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/Settings')}>
                    <Ionicons name="settings-outline" size={24} color="black" />
                    <Text style={styles.navText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/HelpSupport')}>
                    <MaterialIcons name="support-agent" size={24} color="black" />
                    <Text style={styles.navText}>Help/Support</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        paddingTop: 50,
    },
    halfCircle: {
        width: "100%",
        height: 180,
        backgroundColor: "#D3D3D3",
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
    },
    logoText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#333",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 200,
        marginBottom: 20,
    },
    table: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    tableRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
    },
    tableHeader: {
        fontSize: 16,
        fontWeight: "bold",
    },
    tableData: {
        fontSize: 16,
    },
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    payButton: {
        backgroundColor: "#0A66C2",
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginTop: 20,
    },
    payButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    bottomNav: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: "#ccc",
    },
    navItem: {
        alignItems: "center",
    },
    navText: {
        fontSize: 12,
        marginTop: 3,
        color: "#333",
    },
    homeButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#0A66C2",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -30,
    },
});

