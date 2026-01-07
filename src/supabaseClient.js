import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vwrfenxkxriqvvijpbfh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3cmZlbnhreHJpcXZ2aWpwYmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3ODIzOTUsImV4cCI6MjA4MzM1ODM5NX0.sYhAOxwq8DCXsuYYcnCNTj-3mwOKrxVnJ3dzEMk_T8I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)