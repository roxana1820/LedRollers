import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

export function AppSidebar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isShoeTypesOpen, setIsShoeTypesOpen] = useState(false)
  const { isMobile, setOpenMobile, setOpen } = useSidebar()

  const closeSidebar = () => {
    if (isMobile) setOpenMobile(false)
    else setOpen(false)
  }

  return (
    <Sidebar className="fixed top-0 left-0 h-screen z-[3000]">
      <SidebarHeader>
        <h2 className="px-4 py-4 text-xl md:text-lg font-semibold">LedRollers</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-4">
            <SidebarMenuItem>
              <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                  <span className="text-lg md:text-base">Продукти</span>
                    <ChevronDown className={`ml-auto transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 mt-1 space-y-2">
                  <SidebarMenuButton size="text-sm" asChild>
                    <Link to="/products" className="text-lg md:text-base" onClick={closeSidebar}>Всички модели</Link>
                  </SidebarMenuButton>
                  <Collapsible open={isShoeTypesOpen} onOpenChange={setIsShoeTypesOpen}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton size="text-sm" className="w-full">
                        <span>Светещи маратонки с 4 колелца</span>
                        <ChevronDown className={`ml-auto transition-transform ${isShoeTypesOpen ? "rotate-180" : ""}`} />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-2 space-y-2">
                      <SidebarMenuButton size="text-sm" asChild>
                        <Link to="/products/boys" className="text-sm" onClick={closeSidebar}>За момчета</Link>
                      </SidebarMenuButton>
                      <SidebarMenuButton size="text-sm" asChild>
                        <Link to="/products/girls" className="text-sm" onClick={closeSidebar}>За момичета</Link>
                      </SidebarMenuButton>
                    </CollapsibleContent>
                  </Collapsible>
                  <SidebarMenuButton size="text-sm" asChild>
                    <Link to="/products/non-light-shoes" onClick={closeSidebar}>Светещи маратонки без колелца</Link>
                  </SidebarMenuButton>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/about" onClick={closeSidebar}><span className="text-lg md:text-base">За нас</span></Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/about#contacts" onClick={closeSidebar}>
                 <span className="text-lg md:text-base">Контакти</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}