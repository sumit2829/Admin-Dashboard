import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer ,Legend} from "recharts";

const salesData = [
    { name: "jan", sales: 4000},
    { name: "feb", sales: 3000},
    { name: "Mar", sales: 5000},
    { name: "Apr", sales: 4500},
    { name: "May", sales: 6000},
    { name: "jun", sales: 5500},
];
const SalesTrendChart = () => {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-gray-700"
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y: 0}}
    transition={{delay: 0.2}}
    >
        <h2
        className="text-lg font-medium mb-4 text-gray-100" 
        >Sales Trend</h2>

        <div style={{width:"100%", height: 300 }}>
        <ResponsiveContainer>
            <LineChart data={salesData}>
                <XAxis dataKey={"name"} stroke="#9ca3af"/>
                <YAxis stroke="#9CA3AF"/>
                <Tooltip
                contentStyle={{
                    backgroundColor: "rgba(31, 41, 55,0.8)",
                    borderColor:"#4B5563"
                }}
                itemStyle={{color: "#E5E7EB"}}
                />
                <Legend/>
                    <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    />
            </LineChart>
        </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesTrendChart