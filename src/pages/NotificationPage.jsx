import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { NotificationList } from '../components/NotificationList'

const NotificationPage = () => {
    const handleBack = () => {
        window.history.back()
    }
  return (
    <div>
      <div className="flex items-center justify-between text-gray-200 h-14">
        <button onClick={handleBack} className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="ml-2 text-lg font-semibold">Bildirimler</span>
        <span className="w-6 h-6 mr-2 text-lg font-semibold"></span>
      </div>
      <NotificationList/>
    </div>
  )
}

export default NotificationPage
