import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  typedTitle = '';
  fullTitle = 'Full Stack Java / Angular Developer';

  typedDescription = '';
  fullDescription =
    'Full stack developer with 3 years of experience designing and developing web applications with Java and Angular, specialized in REST APIs, SPA interfaces and business applications.';

  showHeroTags = false;
  showHeroInfo = false;
  showHeroActions = false;

  stats = [
    { label: 'Years of experience', value: 3, current: 0 },
    { label: 'Key technologies', value: 12, current: 0 },
    { label: 'Business app focus', value: 100, current: 0, suffix: '%' }
  ];

  @ViewChildren('revealElement') revealElements!: QueryList<ElementRef>;

  private titleInterval?: ReturnType<typeof setInterval>;
  private descriptionInterval?: ReturnType<typeof setInterval>;
  private observer?: IntersectionObserver;
  private statIntervals: ReturnType<typeof setInterval>[] = [];
  private heroTimeouts: ReturnType<typeof setTimeout>[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startTypingSequence();
    this.startCounters();
  }

  ngAfterViewInit(): void {
    this.initRevealObserver();
  }

  ngOnDestroy(): void {
    if (this.titleInterval) clearInterval(this.titleInterval);
    if (this.descriptionInterval) clearInterval(this.descriptionInterval);
    if (this.observer) this.observer.disconnect();
    this.statIntervals.forEach(interval => clearInterval(interval));
    this.heroTimeouts.forEach(timeout => clearTimeout(timeout));
  }

  private startTypingSequence(): void {
    let titleIndex = 0;
    this.typedTitle = '';
    this.typedDescription = '';

    this.titleInterval = setInterval(() => {
      if (titleIndex < this.fullTitle.length) {
        this.typedTitle += this.fullTitle.charAt(titleIndex);
        titleIndex++;
        this.cdr.detectChanges();
      } else {
        if (this.titleInterval) clearInterval(this.titleInterval);
        this.startDescriptionTyping();
      }
    }, 60);
  }

  private startDescriptionTyping(): void {
    let descriptionIndex = 0;

    this.descriptionInterval = setInterval(() => {
      if (descriptionIndex < this.fullDescription.length) {
        this.typedDescription += this.fullDescription.charAt(descriptionIndex);
        descriptionIndex++;
        this.cdr.detectChanges();
      } else {
        if (this.descriptionInterval) clearInterval(this.descriptionInterval);
        this.revealHeroElements();
      }
    }, 22);
  }

  private revealHeroElements(): void {
    const tagsTimeout = setTimeout(() => {
      this.showHeroTags = true;
      this.cdr.detectChanges();
    }, 150);

    const infoTimeout = setTimeout(() => {
      this.showHeroInfo = true;
      this.cdr.detectChanges();
    }, 350);

    const actionsTimeout = setTimeout(() => {
      this.showHeroActions = true;
      this.cdr.detectChanges();
    }, 550);

    this.heroTimeouts.push(tagsTimeout, infoTimeout, actionsTimeout);
  }

  private startCounters(): void {
    this.stats.forEach((stat, i) => {
      const duration = 1800;
      const steps = 60;
      const increment = stat.value / steps;
      let currentValue = 0;
      let stepCount = 0;

      const interval = setInterval(() => {
        stepCount++;
        currentValue += increment;

        if (stepCount >= steps) {
          stat.current = stat.value;
          clearInterval(interval);
        } else {
          stat.current = Math.floor(currentValue);
        }

        this.cdr.detectChanges();
      }, duration / steps);

      this.statIntervals[i] = interval;
    });
  }

  private initRevealObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );

    this.revealElements.forEach((element) => {
      this.observer?.observe(element.nativeElement);
    });
  }
}
