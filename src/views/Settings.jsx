"use client";

import { Building2, CreditCard, Bell, Users, Save, Shield } from "lucide-react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import dashboardService from "../services/dashboardService";

function SettingsSection({ icon: Icon, title, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
      <div className="flex items-center" style={{ gap: 10, marginBottom: 20 }}>
        <div className="rounded-lg flex items-center justify-center" style={{ width: 36, height: 36, backgroundColor: "#E8F5E9" }}>
          <Icon className="w-4.5 h-4.5" style={{ color: "#2D5A27", width: 18, height: 18 }} />
        </div>
        <h3 style={{ fontSize: 16 }} className="font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function FieldRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100" style={{ padding: "12px 0" }}>
      <span style={{ fontSize: 13 }} className="text-gray-500">{label}</span>
      <span style={{ fontSize: 14 }} className="font-medium text-gray-900">{value}</span>
    </div>
  );
}

export default function Settings() {
  const { data, loading } = useFetch(() => dashboardService.getSettings());

  if (loading || !data) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="bg-white rounded-xl border border-gray-200 animate-pulse" style={{ padding: "22px 24px", height: 500 }} />
      </div>
    );
  }

  const { facility, billing, alerts, users } = data;

  const roleStyles = {
    Administrator: { bg: "#E8F5E9", color: "#2D5A27" },
    Manager: { bg: "#E3F2FD", color: "#1565C0" },
    Accountant: { bg: "#FFF3E0", color: "#E65100" },
    Operator: { bg: "#F3E5F5", color: "#7B1FA2" },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 style={{ fontSize: 20 }} className="font-bold text-gray-900">Settings</h2>
        <button className="flex items-center gap-2 bg-[#2D5A27] text-white rounded-lg font-medium hover:bg-[#234a1f] transition-colors" style={{ padding: "9px 18px", fontSize: 14 }}>
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Facility Info */}
        <SettingsSection icon={Building2} title="Facility Information">
          <FieldRow label="Name" value={facility.name} />
          <FieldRow label="Location" value={facility.location} />
          <FieldRow label="Total Capacity" value={facility.capacity} />
          <FieldRow label="Number of Rooms" value={facility.rooms} />
          <FieldRow label="License No." value={facility.license} />
          <FieldRow label="Owner" value={facility.owner} />
        </SettingsSection>

        {/* Billing Config */}
        <SettingsSection icon={CreditCard} title="Billing Configuration">
          <FieldRow label="Rent per MT/month" value={`₹${billing.rentPerMT}`} />
          <FieldRow label="Loading Charge" value={`₹${billing.loadingCharge}`} />
          <FieldRow label="Unloading Charge" value={`₹${billing.unloadingCharge}`} />
          <FieldRow label="GST Rate" value={`${billing.gstRate}%`} />
          <FieldRow label="Late Fee" value={`${billing.lateFee}% per month`} />
          <FieldRow label="Billing Cycle" value={billing.billingCycle} />
        </SettingsSection>

        {/* Alert Thresholds */}
        <SettingsSection icon={Bell} title="Alert Thresholds">
          <FieldRow label="Temperature Deviation" value={`±${alerts.tempThreshold}°C`} />
          <FieldRow label="Humidity Deviation" value={`±${alerts.humidityThreshold}%`} />
          <FieldRow label="Power Backup Delay" value={`${alerts.powerBackupDelay} sec`} />
          <FieldRow label="Payment Overdue After" value={`${alerts.overduePaymentDays} days`} />
          <FieldRow label="Stock Aging Alert" value={`${alerts.stockAgingAlert} days`} />
        </SettingsSection>

        {/* Users */}
        <SettingsSection icon={Users} title="User Management">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {users.map((user) => {
              const rs = roleStyles[user.role] || roleStyles.Operator;
              return (
                <div key={user.id} className="flex items-center rounded-lg hover:bg-gray-50 transition-colors" style={{ gap: 14, padding: "12px 14px" }}>
                  <div className="rounded-full bg-[#2D5A27] flex items-center justify-center text-white font-semibold flex-shrink-0" style={{ width: 36, height: 36, fontSize: 14 }}>
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center" style={{ gap: 8 }}>
                      <span style={{ fontSize: 14 }} className="font-medium text-gray-900">{user.name}</span>
                      <span className="rounded-full font-medium" style={{ fontSize: 11, padding: "2px 10px", backgroundColor: rs.bg, color: rs.color }}>
                        {user.role}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, marginTop: 2 }} className="text-gray-400">{user.email} · Last login: {user.lastLogin}</p>
                  </div>
                  <Shield className="w-4 h-4 text-gray-300" />
                </div>
              );
            })}
          </div>
        </SettingsSection>
      </div>
    </div>
  );
}
