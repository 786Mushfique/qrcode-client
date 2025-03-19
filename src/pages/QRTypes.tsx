"use client"

import type React from "react"
import { Link, Mail, FileText, Phone, MessageSquare, Wifi, User, Calendar, ArrowRight } from "lucide-react"
import "./qr-types.scss"

interface QRType {
  id: string
  title: string
  desc: string
  icon: React.ReactNode
}

interface QRTypesProps {
  onChoose: (type: string) => void
}

export const QRTypes: React.FC<QRTypesProps> = ({ onChoose }) => {
  const types: QRType[] = [
    { id: "link", title: "Link", desc: "Link to any Website URL", icon: <Link className="icon" /> },
    { id: "email", title: "Email", desc: "Send an email", icon: <Mail className="icon" /> },
    { id: "text", title: "Text", desc: "Share text", icon: <FileText className="icon" /> },
    { id: "call", title: "Call", desc: "Make a call", icon: <Phone className="icon" /> },
    { id: "sms", title: "Sms", desc: "Send message", icon: <MessageSquare className="icon" /> },
    {
      id: "whatsapp",
      title: "Whatsapp",
      desc: "Send whatsapp message",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      ),
    },
    { id: "wifi", title: "Wifi", desc: "Connect to Wi-Fi", icon: <Wifi className="icon" /> },
    { id: "vcard", title: "Vcard", desc: "Share a contact to the phone scanning", icon: <User className="icon" /> },
    { id: "event", title: "Event", desc: "Invite people to your event", icon: <Calendar className="icon" /> },
  ]

  return (
    <section className="qr-types">
      <div className="background-effects">
        <div className="effect-top"></div>
        <div className="effect-bottom"></div>
      </div>

      <div className="container">
        <h2 className="section-title">QR Code Types</h2>
        <p className="section-description">Choose the QR code type that suits your needs.</p>

        <div className="types-grid">
          {types.map((type) => (
            <div key={type.id} className="type-card-wrapper">
              <div className="card-glow"></div>
              <div className="type-card">
                <div className="icon-container">{type.icon}</div>
                <div className="card-content">
                  <h3 className="type-title">{type.title}</h3>
                  <p className="type-description">{type.desc}</p>
                  <button className="choose-button" onClick={() => onChoose(type.id)}>
                    <span>Choose</span>
                    <ArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



