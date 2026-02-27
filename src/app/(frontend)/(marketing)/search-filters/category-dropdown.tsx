'use client'
import { Category } from '@/payload-types'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  HoverCardArrow,
} from '@/components/ui/hover-card'
import Link from 'next/link'

interface Props {
  category: Category
  isActive: boolean
  isNavigationHovered: boolean
}

const CategoryDropdown = ({ category, isActive, isNavigationHovered }: Props) => {
  const backgroundColor = category.color || '#F5F5F5'
  return (
    <div className="relative">
      <HoverCard openDelay={1} closeDelay={1}>
        <HoverCardTrigger asChild>
          <Button
            variant="elevated"
            className={cn(
              'h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black',
              isActive && !isNavigationHovered && 'bg-white border-primary',
            )}
          >
            {category.name}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent
          side="bottom"
          align="center"
          sideOffset={6}
          style={{ backgroundColor }}
          className="flex w-60 flex-col overflow-hidden rounded-md border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-0"
        >
          <div className="absolute -top-3 left-0 h-3 w-full" />
          <HoverCardArrow className="fill-black" width={14} height={6} />
          {category.subcategories &&
            category.subcategories.length > 0 &&
            category.subcategories.map((subcategory) => (
              <Link
                href={'/'}
                key={subcategory.id}
                className="w-full block p-4 text-left hover:bg-black hover:text-white underline font-medium"
              >
                {subcategory.name}
              </Link>
            ))}
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export default CategoryDropdown
