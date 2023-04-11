import { createClient } from '@supabase/supabase-js'
const URL = "https://ofinbilmdspjgpzwnasl.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9maW5iaWxtZHNwamdwenduYXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwODQzMTQsImV4cCI6MTk5NjY2MDMxNH0.vKGgBJ22Bk6vjGmj57m7cuPT2IJLALU7MwDL31HJj3Q"
export const supabase = createClient(URL, API_KEY)