import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vekqcezfddaccoiipylo.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZla3FjZXpmZGRhY2NvaWlweWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0MDg3NzAsImV4cCI6MjAxMjk4NDc3MH0.TuioAgBjI0pXSUgWTdgGH5LCaix0jUPnEQ2OBF2ZdQU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})