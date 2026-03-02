"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    User,
    MapPin,
    Sprout,
    IndianRupee,
    Building2,
    StickyNote,
    Plus,
    Trash2,
    Save,
    FileText,
    X,
} from "lucide-react";

export default function AddFarmer() {
    const router = useRouter();

    const [banks, setBanks] = useState([
        { bankName: "", branch: "", accountNumber: "", ifsc: "", upi: "" },
    ]);

    const addBank = () => {
        setBanks([
            ...banks,
            { bankName: "", branch: "", accountNumber: "", ifsc: "", upi: "" },
        ]);
    };

    const removeBank = (index) => {
        setBanks(banks.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-1">
                    <button
                        onClick={() => router.push("/farmers")}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Add New Farmer</h2>
                        <p className="text-sm text-gray-500 mt-0.5">
                            Dashboard &gt; Farmers &gt; <span className="text-green-700 font-medium">Add Farmer</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Form Sections */}
            <div className="space-y-6">

                {/* Basic Information */}
                <Card icon={<User className="w-5 h-5" />} title="Basic Information">
                    <TwoCol>
                        <Input label="Full Name" placeholder="Enter full name" required />
                        <Input label="Father's Name" placeholder="Enter father's name" />
                        <Input label="Mobile Number" placeholder="10-digit number" required type="tel" />
                        <Input label="Alternate Mobile" placeholder="Optional" type="tel" />
                        <Input label="Aadhaar Number" placeholder="12-digit Aadhaar" />
                        <Input label="PAN Number" placeholder="e.g. ABCDE1234F" />
                    </TwoCol>
                </Card>

                {/* Address Details */}
                <Card icon={<MapPin className="w-5 h-5" />} title="Address Details">
                    <TwoCol>
                        <Input label="Village" placeholder="Enter village" required />
                        <Input label="Tehsil" placeholder="Enter tehsil" />
                        <Input label="District" placeholder="Enter district" required />
                        <Input label="State" placeholder="Enter state" required />
                        <Input label="PIN Code" placeholder="6-digit PIN" />
                    </TwoCol>
                    <div className="mt-5">
                        <Textarea label="Full Address" placeholder="Enter complete address..." />
                    </div>
                </Card>

                {/* Farming Information */}
                <Card icon={<Sprout className="w-5 h-5" />} title="Farming Information">
                    <TwoCol>
                        <Input label="Total Land (Acres)" placeholder="e.g. 5.5" type="number" />
                        <Select label="Farmer Category" options={["Small", "Medium", "Large"]} />
                        <Select label="Primary Crop" options={["Potato", "Onion", "Wheat", "Rice", "Other"]} />
                        <Input label="Estimated Quantity (MT)" placeholder="e.g. 20" type="number" />
                    </TwoCol>
                    <Toggle label="Is Local Farmer?" />
                </Card>

                {/* Financial Setup */}
                <Card icon={<IndianRupee className="w-5 h-5" />} title="Financial Setup">
                    <TwoCol>
                        <Input label="Opening Balance (₹)" placeholder="0.00" type="number" />
                        <Select label="Balance Type" options={["Debit", "Credit"]} />
                        <Input label="Credit Limit (₹)" placeholder="e.g. 50000" type="number" />
                        <Input label="Interest % (Monthly)" placeholder="e.g. 1.5" type="number" />
                        <Input label="Payment Due (Days)" placeholder="e.g. 30" type="number" />
                    </TwoCol>
                    <Toggle label="Enable Auto SMS Reminder" />
                </Card>

                {/* Bank Information */}
                <Card icon={<Building2 className="w-5 h-5" />} title="Bank Information">
                    <div className="space-y-5">
                        {banks.map((_, index) => (
                            <div key={index} className="relative">
                                {banks.length > 1 && (
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-medium text-gray-500">Account #{index + 1}</span>
                                        <button
                                            onClick={() => removeBank(index)}
                                            className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                            Remove
                                        </button>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Input label="Bank Name" placeholder="e.g. SBI" />
                                    <Input label="Branch" placeholder="Branch name" />
                                    <Input label="Account Number" placeholder="Account number" />
                                    <Input label="IFSC Code" placeholder="e.g. SBIN0001234" />
                                    <Input label="UPI ID" placeholder="e.g. name@upi" />
                                </div>
                                {index < banks.length - 1 && (
                                    <div className="border-b border-dashed border-gray-200 mt-5" />
                                )}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={addBank}
                        className="mt-5 flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 bg-green-50 hover:bg-green-100 px-4 py-2.5 rounded-xl transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Add Bank Account
                    </button>
                </Card>

                {/* Remarks */}
                <Card icon={<StickyNote className="w-5 h-5" />} title="Remarks">
                    <Textarea placeholder="Any additional notes about this farmer..." />
                </Card>

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2 pb-8">
                    <button
                        onClick={() => router.push("/farmers")}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors"
                    >
                        <X className="w-4 h-4" />
                        Cancel
                    </button>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors">
                        <FileText className="w-4 h-4" />
                        Save Draft
                    </button>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-medium shadow-sm transition-colors">
                        <Save className="w-4 h-4" />
                        Save Farmer
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─── Reusable Sub-Components ──────────────────────── */

function Card({ icon, title, children }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <div className="text-green-700">{icon}</div>
                <h3 className="text-base font-semibold text-gray-800">{title}</h3>
            </div>
            <div className="p-6">{children}</div>
        </div>
    );
}

function TwoCol({ children }) {
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>;
}

function Input({ label, required, placeholder, type = "text" }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">
                {label}
                {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 focus:outline-none transition-all"
            />
        </div>
    );
}

function Textarea({ label, placeholder }) {
    return (
        <div>
            {label && (
                <label className="block text-sm font-medium text-gray-600 mb-1.5">{label}</label>
            )}
            <textarea
                rows="3"
                placeholder={placeholder}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 focus:outline-none transition-all resize-none"
            />
        </div>
    );
}

function Select({ label, options }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">{label}</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 focus:outline-none transition-all bg-white">
                <option value="" className="text-gray-400">Select</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
}

function Toggle({ label }) {
    const [on, setOn] = useState(false);
    return (
        <div className="flex items-center gap-3 mt-5">
            <button
                type="button"
                onClick={() => setOn(!on)}
                className={`relative w-10 h-6 rounded-full transition-colors ${on ? "bg-green-600" : "bg-gray-300"}`}
            >
                <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${on ? "translate-x-4" : ""}`}
                />
            </button>
            <label className="text-sm text-gray-700 cursor-pointer" onClick={() => setOn(!on)}>
                {label}
            </label>
        </div>
    );
}
