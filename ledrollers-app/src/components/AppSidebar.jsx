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

  return (
    <Sidebar className="z-[50]">
      <SidebarHeader>
        <h2 className="px-4 py-2 text-lg font-semibold">LedRollers</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <span>Продукти</span>
                    <ChevronDown className={`ml-auto transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 mt-2 space-y-2">
                  <Collapsible open={isShoeTypesOpen} onOpenChange={setIsShoeTypesOpen}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton size="sm" className="w-full">
                        <span>Светещи маратонки с 4 колелца</span>
                        <ChevronDown className={`ml-auto transition-transform ${isShoeTypesOpen ? "rotate-180" : ""}`} />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-2 space-y-2">
                      <SidebarMenuButton size="sm" asChild>
                        <Link to="/boys" className="text-sm">За момчета</Link>
                      </SidebarMenuButton>
                      <SidebarMenuButton size="sm" asChild>
                        <Link to="/girls" className="text-sm">За момичета</Link>
                      </SidebarMenuButton>
                    </CollapsibleContent>
                  </Collapsible>
                  <SidebarMenuButton size="sm" asChild>
                    <Link to="/non-light-shoes">Несветещи маратонки</Link>
                  </SidebarMenuButton>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/about">За нас</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/contacts">Контакти</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}